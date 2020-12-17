require("../../src/config");
import chai from "chai"
const should = chai.should();

import { ApiKeyAuth, CreateListRequestModel, ListApi, ListApiApiKeys } from "../../src/selligent/api";

describe("Create Lists", ()=>{
	it("should create list", async ()=>{
		const client = new ListApi("https://teachco.slgnt.us/Portal/Api")
		const auth = new ApiKeyAuth("header", "X-ApiKey");
		auth.apiKey = [process.env.SELLIGENT_API_KEY, process.env.SELLIGENT_API_SECRET].join(":");
		client.setDefaultAuthentication(auth)
		
		return client.listCreateList("teachco_do_not_use_accel", {
			"apiName": "my_api_generated_list",
			"description": "my_api_generated_list",
			"name": "my_api_generated_list",
			"type": CreateListRequestModel.TypeEnum.Datalist
		}).then((response)=>{
			should.exist(response.body.message)
			console.log(response);
			return "";
		}).catch((error)=>{
			console.log(error);
			should.not.exist(error);
			
			return ""
		});

	})
});
