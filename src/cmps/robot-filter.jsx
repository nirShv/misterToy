import {  useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useFormRegister } from '../hooks/useFormRegister'
import { useFormRegisterBase } from '../hooks/useFormRegisterBase'

export const RobotFilter = (props) => {

   const [register] = useFormRegister({
        model: '',
        type: '',
        minBatteryStatus: '',
        maxBatteryStatus: '',
        date: new Date(),
    }, props.onChangeFilter)


    // const { model, type, minBatteryStatus, maxBatteryStatus } = filterBy

    const classObj = {className: 'robot-filter'}
    return (
        // <form className='robot-filter'>
        <form {...classObj} >
            <section>
                <label htmlFor="model">Model</label>
                <input {...register('model', 'text')} />
            </section>
            <section>
                <label htmlFor="type">Type</label>
                <input {...register('type', 'text')} />
            </section>
            <section>
                <label htmlFor="minBatteryStatus">minBatteryStatus</label>
                <input {...register('minBatteryStatus', 'number')} />
            </section>
            <section>
                <label htmlFor="maxBatteryStatus">maxBatteryStatus</label>
                <input {...register('maxBatteryStatus', 'number')} />
            </section>
            <section>
                <label htmlFor="date">maxBatteryStatus</label>
                <input {...register('date', 'date')} />
            </section>
        </form>
    )
}
