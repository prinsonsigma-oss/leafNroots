'use client'

import ProductDetailPage from '@/components/products/ProductDetailPage'
import { getProductBySlug } from '@/data/products'

export default function CardamomPage() {
  const product = getProductBySlug('cardamom')!
  return <ProductDetailPage product={product} />
}
