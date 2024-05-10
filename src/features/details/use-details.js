import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  loadCountryByName,
  clearDetails,
  selectDetails,
} from './details-slice';

export const useDetails = (name) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
