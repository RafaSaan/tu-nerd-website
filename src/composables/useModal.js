import { ref } from "@vue/reactivity";

export const useModal = (initialValue = false) => {
  let isOpen = ref(initialValue);
  const openModal = () => {
    isOpen.value = true;
  };
  const closeModal = () => {
    isOpen.value = false;
  };
  return [isOpen, openModal, closeModal];
};

// export useModal;
