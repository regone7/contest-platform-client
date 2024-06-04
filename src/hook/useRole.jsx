import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const useRole = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: role = [] } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
          const { data } = await axiosPublic.get(`/user/${user?.email}`)
          return data.role;
        },
      })
    return  [role];
};

export default useRole;