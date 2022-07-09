import {RequestOptions, RESTDataSource} from "apollo-datasource-rest";
import {Delete} from "./commonIntf.js";

export default class MyRESTDataSource extends RESTDataSource{
    protected willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    async deleteObj(id: string): Promise<Delete> {
        return this.delete<Delete>(id);
    }
}