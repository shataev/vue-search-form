import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';


//Данные для селектов
import cities from '../db/cities';
import actionTypes from '../db/actionTypes';
import propertyTypes from '../db/propertyTypes';
import priceTypes from '../db/priceTypes';

Vue.use( Vuex );

export default new Vuex.Store( {
	state: {
		//Настройки и данные для селектов основной формы
		mainFormSelectSettings: [
			{
				name: 'cities',
				type: 'select',
				data: cities,
				fieldNameInModel: 'cityId'
			},
			{
				name: 'actionTypes',
				type: 'select',
				data: actionTypes,
				fieldNameInModel: 'actionTypeId'
			},
			{
				name: 'propertyTypes',
				type: 'select',
				data: propertyTypes,
				fieldNameInModel: 'propertyTypeId'
			}
		],
		formModel: {
			cityId: cities[0].id,
			actionTypeId: actionTypes[0].id,
			propertyTypeId: propertyTypes[0].id,
			priceFrom: null,
			priceTo: null,
			priceTypeId: priceTypes[0].id,
			sizeFrom: null,
			sizeTo: null,
			search: null
		},
		//Тип активной формы. Может быть main или byName
		activeFormType: 'main',

		//Дополнительные параметры основной формы (main)
		additionalParams: [
			{
				title: 'Цена',
				isActive: false,
				identifier: 'price',
				from: null,
				to: null,
				priceTypes: priceTypes
			},
			{
				title: 'Метраж',
				isActive: false,
				identifier: 'size',
				from: null,
				to: null
			}
		]
	},
	getters: {
		/**
		 * Возвращает видимость доплнительных полей осноной формы
		 * @param state
		 * @returns {boolean}
		 */
		isAdditionalFieldsVisible ( state ) {
			//Если текущаю активная форма не основная, то дополнительные поля скрыты
			if ( state.activeFormType !== 'main' ) {
				return false;
			}

			//Проверка на наличие бы одного поля активного дополнительного поля
			return !!state.additionalParams.find( param => param.isActive );
		}
	},
	mutations,
	actions,
	modules: {}
} );
