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
  setRating: (number) =>
    set((state) => ({ formOneData: { ...state.formOneData, rating: number } })),
  setRatings: (number, index) =>
    set((state) => {
      const arrCopy = state.formTwoData.ratings
      arrCopy[index] = number
      return { formTwoData: { ...state.formTwoData, ratings: arrCopy } }
    }),
}))

export { useFormStore }
