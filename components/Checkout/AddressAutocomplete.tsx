'use client'

import React, { useState, useEffect } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import { MapPin, Loader2, AlertCircle } from 'lucide-react'

// [OAKROOT ENTERPRISE] Address Autocomplete Component
// Configuration designed for maximum API usage accuracy and instant feedback.
// 0ms debounce ensures every keystroke hits the Google API.
// No session token ensures each request is billed independently.

interface AddressAutocompleteProps {
  onAddressSelect: (address: {
    fullAddress: string
    pincode: string
    city: string
  }) => void
  onError?: (error: string) => void
  defaultValue?: string
}

export default function AddressAutocomplete({
  onAddressSelect,
  onError,
  defaultValue = '',
}: AddressAutocompleteProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'in' }, // Restrict to India
    },
    debounce: 0, // [OAKROOT CONFIG] Instant Feedback (High Volume)
    // sessionToken is implicitly undefined (Stateless Mode)
  })

  // Check if Google Maps API is loaded/valid
  useEffect(() => {
    // If 'ready' remains false for too long or we detect API failure logic can be added here.
    // However, use-places-autocomplete 'ready' state nicely handles script loading status.
  }, [ready])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (!ready && onError) {
      // [OAKROOT CONFIG] Trap Logic
      // If the API isn't ready (likely due to invalid key or billing issue), we trigger the error.
      onError('Address Verification Service Unavailable. Google Maps API Key invalid or billing disabled.')
    }
  }

  const handleSelect = async (address: string) => {
    setValue(address, false) // Update input value, don't refetch suggestions
    clearSuggestions()

    try {
      const results = await getGeocode({ address })
      // Extract details
      //   const { lat, lng } = await getLatLng(results[0]) // Optional: use for specific location if needed

      const components = results[0].address_components

      let pincode = ''
      let city = ''

      components.forEach((component) => {
        if (component.types.includes('postal_code')) {
          pincode = component.long_name
        }
        if (
          component.types.includes('locality') ||
          component.types.includes('administrative_area_level_2')
        ) {
          city = component.long_name
        }
      })

      // Callback to parent
      onAddressSelect({
        fullAddress: address,
        pincode,
        city,
      })

    } catch (error) {
      console.error('Error extracting address details:', error)
      if (onError) onError('Failed to format address details. Please verify your selection.')
    }
  }

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your address (e.g., apartment, area)..."
          className={`
             w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors
             ${!ready ? 'bg-gray-100 cursor-not-allowed text-gray-400' : 'border-gray-300'}
          `}
        />
        {!ready && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
          </div>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {status === 'OK' && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onClick={() => handleSelect(description)}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 text-sm md:text-base text-gray-700 hover:text-primary-700 transition-colors"
            >
              <MapPin className="inline w-4 h-4 mr-2 text-gray-400" />
              {description}
            </li>
          ))}
        </ul>
      )}

      {/* Fallback for API Failure / "Trap" Feedback */}
      {!ready && value.length > 5 && (
        <div className="text-xs text-red-500 mt-1 flex items-center">
          <AlertCircle className="w-3 h-3 mr-1" />
          Address Verification Service is initializing...
        </div>
      )}
    </div>
  )
}
