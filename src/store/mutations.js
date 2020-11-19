import priceTypes from "../db/priceTypes";
import cities from "../db/cities";
import propertyTypes from "../db/propertyTypes";
import actionTypes from "../db/actionTypes";

const setActiveFormType = ( state, newActiveFormType ) => {
	state.activeFormType = newActiveFormType;
};

const toggleAdditionalParamVisibilty = ( state, paramIdentifier ) => {
	let param = state.additionalParams.find( param => param.identifier === paramIdentifier );
	param.isActive = !param.isActive;
};

const updateFormModelField = ( state, fieldData ) => {
	state.formModel[fieldData.fieldName] = fieldData.value;

};

const resetFormData = ( state ) => {
	state.formModel = {
		cityId: cities[0].id,
		actionTypeId: actionTypes[0].id,
		propertyTypeId: propertyTypes[0].id,
		priceFrom: null,
		priceTo: null,
		priceTypeId: priceTypes[0].id,
		sizeFrom: null,
		sizeTo: null,
		search: null
	}
};

resetFormData

export default {
	setActiveFormType,
	toggleAdditionalParamVisibilty,
	updateFormModelField,
	resetFormData
};