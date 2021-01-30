require("../../src/config");
import chai from "chai"
const should = chai.should();

import { ApiKeyAuth, ListApi } from "../../src/smc/api";

describe("Get List", ()=>{
	it("should create list", async ()=>{
		const client = new ListApi("https://teachco.slgnt.us/Portal/Api")
		const auth = new ApiKeyAuth("header", "X-ApiKey");
		auth.apiKey = [process.env.SELLIGENT_API_KEY, process.env.SELLIGENT_API_SECRET].join(":");
		client.setDefaultAuthentication(auth);
		return client.listGetLists("tgc-direct_prod", "Userlist", "TGCD_CONTACTS_LIST")
			.then((res)=>{
				console.log(res.body);
				should.exist(res.body.lists, "List");
				return "";
			}).catch((error)=>{
				console.log(error);
				should.not.exist(error, "Error");
				return ""
			});
	});
});