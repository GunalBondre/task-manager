import Sidebar from '../../components/sidebar/Sidebar';
import AddTask from '../../components/taskmanager/AddTask';
import TaskList from '../../components/taskmanager/TaskList';
import './taskmanager.scss';

const TaskManager = () => {
	return (
		<div>
			<div className='taskmanager'>
				<div className='taskmanager__left'>
					<Sidebar />
				</div>
				<div className='taskmanager__right'>
					<div className='taskmanager__addtask'>
						<AddTask />
					</div>
					<div className='taskmanager__tasklist'>
						<TaskList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskManager;
