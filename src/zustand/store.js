import create from 'zustand'

const useFormStore = create((set) => ({
  formOneData: { formId: '', rating: 0, message: '', name: '', email: '', contactMe: false },
  formTwoData: {
    formId: '',
    ratings: [0, 0, 0],
    message: '',
    name: '',
    email: '',
    contactMe: false,
  },
  formThreeData: { formId: '', answer: false, message: '', name: '', email: '', contactMe: false },
  setFormOne: (data) => set((state) => ({ formOneData: { ...state.formOneData, ...data } })),
  setFormTwo: (data) => set((state) => ({ formTwoData: { ...state.formTwoData, ...data } })),
  setFormThree: (data) => set((state) => ({ formThreeData: { ...state.formThreeData, ...data } })),
}))

export { useFormStore }
