/**
 * Устанавливает новое значения типа активной формы
 * @param commit
 * @param newActiveFormType String - тип новой активной формы
 */
const setActiveFormType = ( { commit }, newActiveFormType ) => {
	commit( 'setActiveFormType', newActiveFormType );
};

/**
 * Изменяет значение параметра isActive у дополнительного параметра формы поиска на противоположный текущему
 * @param commit
 * @param paramIdentifier String - идентификатор доплнительного параметра формы поиска
 * например, 'size' - идентификатор параметра Метраж
 */
const toggleAdditionalParamVisibilty = ( { commit }, paramIdentifier ) => {
	commit( 'toggleAdditionalParamVisibilty', paramIdentifier );
};

/**
 * Отправляет данные формы в get-параметрах http запроса с помощью axios, например, или fetch. В данном случае,
 * выводим url запроса в  алерте
 */
const sendFormData = ( { state, commit } ) => {
	let url = 'http://localhost:8080/property?';

	//Если активная форма - основная, а не поиск, отправляем данные:
	// 1) по основным полям: Город, Тип сделки, Тип недвижимости
	// 2) по дополнительным полям: Цена, Метраж, в зависимости от того, активные они или нет

	if ( state.activeFormType === 'main' ) {
		url += `cityId=${state.formModel.cityId}&actionTypeId=${state.formModel.actionTypeId}&propertyTypeId=${state.formModel.propertyTypeId}`;

		if ( state.additionalParams[ 0 ].isActive ) {
			url += `&priceFrom=${state.formModel.priceFrom}&priceTo=${state.formModel.priceTo}&priceTypeId=${state.formModel.priceTypeId}`;
		}

		if ( state.additionalParams[ 1 ].isActive ) {
			url += `&sizeFrom=${state.formModel.sizeFrom}&sizeTo=${state.formModel.sizeTo}`;
		}
	}
	//Если активная форма - форма поиска, то отправляем в параметрах запроса только текст поиска
	else {
		url += `search=${state.formModel.search}`;
	}

	//Сбрасываем данные формы до дефолтных
	commit( 'resetFormData' );
	alert( url );
};

export default {
	setActiveFormType,
	toggleAdditionalParamVisibilty,
	sendFormData
};