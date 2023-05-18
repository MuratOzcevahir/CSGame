import React, { useContext } from 'react'
import { appContext } from '../../../../context/AppContext'
import ResourceItem from './ResourceItem'

function Resources() {


    var ctx = useContext(appContext)
    return (
        <div id='_resourceHolder' className='position-sticky top-0 z-3'>

            <div className='container'>
                <ResourceItem iconName="forest" resourceAmount={ctx.GameObject.Resource.Wood.General.Amount} resourceStorage={ctx.GameObject.Storage.WoodStorage.General.Capacity} />
                <ResourceItem iconName="egg_alt" resourceAmount={ctx.GameObject.Resource.Food.General.Amount} resourceStorage={ctx.GameObject.Storage.FoodStorage.General.Capacity} />
            </div>
        </div>

    )
}

export default Resources