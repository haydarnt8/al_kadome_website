import React from 'react'
import Cards from './Cards'
import { useGetProductBySearchQuery} from '../app/services/productApi'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const ProductBySearch = ({input}) => {
    const {title} = useParams();
    const { page } = useSelector((state) => state.page);
    const { data, isLoading, error } = useGetProductBySearchQuery({title, page});

  return (
    <Cards data={data} isLoading={isLoading} error={error} />
  )
}

export default ProductBySearch