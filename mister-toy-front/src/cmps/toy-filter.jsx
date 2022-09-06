import {  useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useFormRegister } from '../hooks/useFormRegister'
import { useFormRegisterBase } from '../hooks/useFormRegisterBase'

export const ToyFilter = (props) => {

   const [register] = useFormRegister({
        name: '',
        minPrice: '',
        maxPrice: '',
        inStock: '',
        labels:[],
        date: new Date(),
    }, props.onChangeFilter)

    const classObj = {className: 'toy-filter'}
    return (
        <form {...classObj} className="toy-filter">
            <section>
                <label htmlFor="name">Name</label>
                <input {...register('name', 'text')} />
            </section>
            <section>
                <label htmlFor="minPrice">Min Price</label>
                <input {...register('minPrice', 'number')} />
            </section>
            <section>
                <label htmlFor="maxPrice">Max Price</label>
                <input {...register('maxPrice', 'number')} />
            </section>
            {/* <section>
                <label htmlFor="price">price</label>
                <input {...register('price', 'range')} />
            </section> */}
            <section>
                <label htmlFor="inStock">In Stock</label>
                <input {...register('inStock', 'checkbox')} />
            </section>
            {/* <section>
                <label htmlFor="date">Enter the store date</label>
                <input {...register('date', 'date')} />
            </section> */}
        </form>
    )
}
