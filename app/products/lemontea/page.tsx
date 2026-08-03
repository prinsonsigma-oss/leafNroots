'use client'

import ProductDetailPage from '@/components/products/ProductDetailPage'
import { getProductBySlug } from '@/data/products'

export default function LemonMintMasalaPage() {
  const product = getProductBySlug('lemontea')!
  return <ProductDetailPage product={product} />
}
