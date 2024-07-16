import Cookies from 'js-cookie'
export default function useGetUser() {
     return Cookies.get('access_token')
}