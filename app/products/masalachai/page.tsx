'use client'

import ProductDetailPage from '@/components/products/ProductDetailPage'
import { getProductBySlug } from '@/data/products'

export default function MasalaBlendPage() {
  const product = getProductBySlug('masalachai')!
  return <ProductDetailPage product={product} />
}
