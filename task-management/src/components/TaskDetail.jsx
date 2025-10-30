// Component displaying a list of tasks

import {useParams} from "react-router";
import { mockData } from "./mockData";

function TaskDetail ()
{  
    const {id} = useParams();
    const task = mockData.find(task => String(task.id) === id);
    
    return (
        <>
            
        </>
        
    )
}

export default TaskDetail;
