import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';
import { environment } from './Environment/Environment';
const helmet = require('helmet')

class App {
    public app: express.Application;
    
    public constructor(){
        this.app = express();
        this.cors();
        this.helmet();
        this.routes();
        this.port();
    }

    private routes(): void {
        this.app.use(routes);
    }
    
    private cors(){
        this.app.use(cors({origin: environment.CORS_ORIGIN, credentials: true}));
    }

    private helmet(){
        this.app.use(helmet());
    }

    private port(){
        this.app.listen(process.env.PORT || environment.SERVER_PORT);
    }
}

export default new App();