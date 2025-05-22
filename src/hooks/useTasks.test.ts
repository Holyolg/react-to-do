import { renderHook, act } from '@testing-library/react-hooks';
import { useTasks } from './useTasks';
import { beforeEach, describe, expect, it } from '@jest/globals';

describe('useTasks', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('добавляет задачу', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Новая задача');
    });
    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].title).toBe('Новая задача');
    expect(result.current.tasks[0].status).toBe('active');
  });

  it('не добавляет пустую задачу', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('   ');
    });
    expect(result.current.tasks.length).toBe(0);
  });

  it('удаляет задачу', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Удалить');
    });
    const id = result.current.tasks[0].id;
    act(() => {
      result.current.removeTask(id);
    });
    expect(result.current.tasks.length).toBe(0);
  });

  it('переключает статус задачи', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Статус');
    });
    const id = result.current.tasks[0].id;
    act(() => {
      result.current.toggleTaskStatus(id);
    });
    expect(result.current.tasks[0].status).toBe('completed');
    act(() => {
      result.current.toggleTaskStatus(id);
    });
    expect(result.current.tasks[0].status).toBe('active');
  });

  it('фильтрует задачи по статусу', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Активная');
      result.current.addTask('Завершенная');
    });
    const id = result.current.tasks[1].id;
    act(() => {
      result.current.toggleTaskStatus(id);
    });
    const completed = result.current.filterTasks('completed', '');
    const active = result.current.filterTasks('active', '');
    expect(completed.length).toBe(1);
    expect(completed[0].status).toBe('completed');
    expect(active.length).toBe(1);
    expect(active[0].status).toBe('active');
  });

  it('фильтрует задачи по поисковому запросу', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Купить хлеб');
      result.current.addTask('Купить молоко');
      result.current.addTask('Позвонить другу');
    });
    const filtered = result.current.filterTasks('all', 'купить');
    expect(filtered.length).toBe(2);
    expect(filtered[0].title).toMatch(/Купить/);
    expect(filtered[1].title).toMatch(/Купить/);
  });

  it('сохраняет задачи в localStorage', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('LS');
    });
    const ls = localStorage.getItem('tasks');
    expect(ls).not.toBeNull();
    const parsed = JSON.parse(ls!);
    expect(parsed.length).toBe(1);
    expect(parsed[0].title).toBe('LS');
  });
});