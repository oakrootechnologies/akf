'use client'

import { useEffect } from 'react'

/**
 * ContentProtection - Prevents downloading images and videos via right-click
 * and common keyboard shortcuts
 */
export default function ContentProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click on input, textarea, and select elements
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable
      ) {
        return
      }
      e.preventDefault()
      return false
    }

    // Disable drag and drop for images and videos
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'IMG' ||
        target.tagName === 'VIDEO' ||
        target.closest?.('img') !== null ||
        target.closest?.('video') !== null
      ) {
        e.preventDefault()
        return false
      }
    }

    // Disable image selection
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'IMG' ||
        target.tagName === 'VIDEO' ||
        target.closest?.('img') !== null ||
        target.closest?.('video') !== null
      ) {
        e.preventDefault()
        return false
      }
    }

    // Disable keyboard shortcuts for saving/downloading
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        return false
      }
      // Disable Ctrl+Shift+I (DevTools - can be used to inspect and download)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }
      // Disable F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }
      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }
      // Disable Print Screen (Windows) - Note: This is limited protection
      if (e.key === 'PrintScreen') {
        e.preventDefault()
        return false
      }
    }

    // Disable copy
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'IMG' ||
        target.tagName === 'VIDEO' ||
        target.closest?.('img') !== null ||
        target.closest?.('video') !== null
      ) {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('copy', handleCopy)

    // Add CSS to prevent image dragging and selection
    const style = document.createElement('style')
    style.textContent = `
      img, video {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        pointer-events: auto !important;
      }
      
      img::selection, video::selection {
        background: transparent !important;
      }
      
      img::-moz-selection, video::-moz-selection {
        background: transparent !important;
      }
    `
    document.head.appendChild(style)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('copy', handleCopy)
      document.head.removeChild(style)
    }
  }, [])

  return null
}

