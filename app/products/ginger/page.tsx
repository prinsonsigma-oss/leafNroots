'use client'

import ProductDetailPage from '@/components/products/ProductDetailPage'
import { getProductBySlug } from '@/data/products'

export default function GingerPage() {
  const product = getProductBySlug('ginger')!
  return <ProductDetailPage product={product} />
}
