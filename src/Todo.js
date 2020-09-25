import React from 'react'
import './Todo.css'
import { ListItemText ,List,ListItem,ListItemAvatar,Divider} from '@material-ui/core'

function Todo(props) {
    return (
            <List className="todo_list">
                <ListItem className="listing">
                    <ListItemAvatar>

                    </ListItemAvatar>
                        <ListItemText primary={props.text} secondary="deadlines"></ListItemText>
                 </ListItem>
                 <Divider variant="inset" component="li" />
            </List>    
    )
}

export default Todo
