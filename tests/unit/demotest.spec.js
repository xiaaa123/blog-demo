import { shallowMount } from '@vue/test-utils'
import Todo from './Todo.vue'
import Axios from 'axios'

describe('data实例', () => {
  it('text', () => {
    expect(typeof Todo.data().text).toBe('string');
  });
  it('list ', () => {
    expect(Array.isArray(Todo.data().list)).toBeTruthy();
  });
});

describe('增', () => {
 it('添加数据', () => {
  const warp = shallowMount(Todo);
  warp.find('.add').trigger('click').then(()=>{
    expect(warp.vm.list.length).toBeGreaterThan(Todo.data().list.length);
  });
 });
});

describe('删', () => {
  it('删除数据', () => {
    const warp = shallowMount(Todo);
    warp.find('.del').trigger('click').then(()=>{
      expect(warp.vm.list.length).toBeLessThan(Todo.data().list.length);
    });
  });
});

describe('查', () => {
  it('查询数据', async () => {
    const warp = shallowMount(Todo);
    await warp.vm.getList()
    expect(warp.vm.list.length).toBeGreaterThan(Todo.data().list.length);
  });
});

describe('检查接口', () => {
  it('检查接口', async () => {
    let { data } = await Axios.get('http://192.168.22.36:3000/unit')
    expect(data.code).toBe(0)
  });
});
