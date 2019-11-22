import { shallowMount } from "@vue/test-utils";
import Home from "../Home";

describe('Home', () => {
  test('is rendered properly for anon user', () => {
    const wrapper = shallowMount(Home, {
      computed: {
        isLoggedIn () {
          return false;
        },
      },
      stubs: ['router-link']
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('is rendered properly for auth user', () => {
    const wrapper = shallowMount(Home, {
      computed: {
        isLoggedIn () {
          return true;
        },
        getUsername () {
          return 'User';
        },
        getBooks () {
          return [];
        }
      },
      stubs: ['router-link']
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
