require("../../src/config");
import chai from "chai"
const should = chai.should();

import { ApiKeyAuth, CreateListRequestModel, ListApi, ListApiApiKeys } from "../../src/selligent/api";

describe("Get List", ()=>{
	it("should create list", async ()=>{
		const client = new ListApi("https://teachco.slgnt.us/Portal/Api")
		const auth = new ApiKeyAuth("header", "X-ApiKey");
		auth.apiKey = [process.env.SELLIGENT_API_KEY, process.env.SELLIGENT_API_SECRET].join(":");
		client.setDefaultAuthentication(auth)
		
		return client.listGetList("my_api_generated_list", "teachco_do_not_use_accel").then((response)=>{
			console.log(response.body);
			response.body.name.should.eq("my_api_generated_list");
			
			return "";
		}).catch((error)=>{
			console.log(error);
			should.not.exist(error);
			
			return ""
		});

	})
});
