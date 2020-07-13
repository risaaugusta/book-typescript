import { Router } from 'express';
/// shared interface across the project
interface IService {
    path: string;
    r: Router;
}
export default IService;
