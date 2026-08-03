'use client'

import ProductDetailPage from '@/components/products/ProductDetailPage'
import { getProductBySlug } from '@/data/products'

export default function IraniChaiPage() {
  const product = getProductBySlug('iranichai')!
  return <ProductDetailPage product={product} />
}
