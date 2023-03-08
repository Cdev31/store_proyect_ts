import {categoryInterface,CATEGORY} from './utility'
import {responseStatus,responseType} from '../../response'

class Category{
    categories: Array<categoryInterface> =[
        {
            id: 'AB01',
            typeCategory: CATEGORY.CATEGORYA
        },
        {
            id: 'AB02',
            typeCategory: CATEGORY.CATEGORYB
        },
        {
            id: 'AB03',
            typeCategory: CATEGORY.CATEGORYC
        },
        {
            id: 'AB04',
            typeCategory: CATEGORY.CATEGORYD
        },
        {
            id: 'AB05',
            typeCategory: CATEGORY.CATEGORYE
        },
    ]

    findAll(): Array<categoryInterface>{
        return this.categories
    }

    findCategory(categoryId:string): responseType<categoryInterface | string> | undefined{
        for (let i =0;this.categories.length > i;i++){
            if(categoryId == this.categories[i].id){
                return{
                    status: responseStatus.Correct,
                    response: this.categories[i]
                }
            }
        }return {
            status: responseStatus['Not Found'],
            response: 'Category not found'
        }

    }

}