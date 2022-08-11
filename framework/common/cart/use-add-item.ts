const useAddItem = () => {
  return (input: any) => {
    return {
      output: JSON.stringify(input) + "_Modified",
    };
  };
};
export default useAddItem;
