import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductBySubCategoryQuery } from '../app/services/productApi'
import {  useSelector } from 'react-redux'
import Cards from './Cards'


const ProductBySubCategory  = () => {
    const { id } = useParams()
    const { page } = useSelector((state) => state.page) 
    const { data, isLoading, error } = useGetProductBySubCategoryQuery({id, page})


  return (
    <Cards data={data} isLoading={isLoading} error={error}  />
  )
}

export default ProductBySubCategory 