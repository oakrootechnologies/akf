import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('AgriKrishi Admin')
    .items([
      // 📂 Orders Group
      S.listItem()
        .title('Orders')
        .child(
          S.list()
            .title('Order Status')
            .items([
              // 🔴 New / Pending
              S.listItem()
                .title('New / Pending')
                .child(
                  S.documentList()
                    .title('Pending Orders')
                    .filter('_type == "order" && status == "pending"')
                ),
              // 🟡 Processing
              S.listItem()
                .title('Processing')
                .child(
                  S.documentList()
                    .title('Processing Orders')
                    .filter('_type == "order" && status == "confirmed"')
                ),
              // 🚚 Shipped
              S.listItem()
                .title('Shipped')
                .child(
                  S.documentList()
                    .title('Shipped Orders')
                    .filter('_type == "order" && status == "shipped"')
                ),
              // ✅ Delivered
              S.listItem()
                .title('Delivered')
                .child(
                  S.documentList()
                    .title('Delivered Orders')
                    .filter('_type == "order" && status == "delivered"')
                ),
              // All Orders (Backup view)
              S.listItem()
                .title('All Orders')
                .child(S.documentTypeList('order')),
            ])
        ),

      S.divider(),

      // Filter out 'order' from the main list since we have a custom group for it
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'order'
      ),
    ])
