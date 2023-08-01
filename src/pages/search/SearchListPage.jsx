import Header from "components/global/Header";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";

function SearchListPage(props) {
  const navigate = useNavigate();
  const { kakao } = window;

  const handleComplete = (data) =>{
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
        navigate('/search/map', {state: result});
      } 
      else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    })
  }

  return (
    <BasicLayout>
      <InnerLayout>
        <Header />
        <DaumPostcode autoClose onComplete={handleComplete}/> 
      </InnerLayout>
    </BasicLayout>
  );
}

export default SearchListPage;