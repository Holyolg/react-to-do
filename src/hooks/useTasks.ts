import { getLocalStorage } from './../lib/get-local-storage.ts';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/index.ts';


export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string): void => {
    if (title.trim().length === 0) return;
    
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: uuidv4(),
        title: title.trim(),
        status: 'active',
      },
    ]);
  };

  const removeTask = (id: string): void => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id: string): void => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === 'completed' ? 'active' : 'completed' }
          : task
      )
    );
  };

  const filterTasks = (filterType: string, searchQuery: string): Task[] => {
    return tasks.filter((task: Task) => {
      // Проверка по статусу
      if (filterType === 'completed' && task.status !== 'completed') return false;
      if (filterType === 'active' && task.status !== 'active') return false;
      
      // Проверка по поисковому запросу
      if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  };

  return {
    tasks,
    setTasks,
    addTask,
    removeTask,
    toggleTaskStatus,
    filterTasks
  };
};