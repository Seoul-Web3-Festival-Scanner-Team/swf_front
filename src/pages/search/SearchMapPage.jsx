import styled from "@emotion/styled";
import Header from "components/global/Header";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import { useEffect, useState } from "react";
import { Map, MapMarker, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {ReactComponent as PlusIcon} from "assets/icons/ic-plus.svg";

const MapTitleBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding-left: 20px;
width: 100%;
height: 108px;
`

const MapTitle = styled.div`
color: var(--black-100, #1F314E);
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const MapTitleDetail = styled.div`
margin-top: 6px;
color: var(--black-60, rgba(31, 49, 78, 0.60));
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const MapGap = styled.div`
  width: 100%;
  height: 12px;
  flex-shrink: 0;
  opacity: 0.2;
  background: #D5DBE5;
`

const ContractBox = styled.div`
  padding: 28px 20px 0 20px;
`

const ContractTitleBox = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContractTitleText = styled.div`
  color: var(--black-100, #1F314E);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ContractTitleButton = styled.button`
  display: flex;
  padding: 8px 13px 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  background: var(--blue-15, rgba(73, 142, 246, 0.15));
  cursor: pointer;
`

const ContractTitleButtonText = styled.div`
  color: var(--blue-100, #498EF6);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ContractCotentsAllBox = styled.div`
  margin-top: 14px;
`

const ContractCotentsBox = styled.div`
  display: flex;
  width: 320px;
  padding: 24px 0px;
  align-items: center;
  gap: 173px;
`

const ContractContentsTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const ContractContentsTextUpperBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const ContractContentsTextTitle = styled.div`
  color: var(--black-100, #1F314E);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.8;
`

const ContractContentsTextBedge = styled.div`
  display: flex;
  padding: 3px 7px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: var(--blue-15, rgba(73, 142, 246, 0.15));
`
const ContractContentsTextBedgeText = styled.div`
  color: var(--blue-100, #498EF6);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const ContractContentsTextBedgeYellow = styled.div`
  display: flex;
  padding: 3px 7px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: var(--yellow-25, rgba(255, 209, 92, 0.25));
`
const ContractContentsTextBedgeTextYellow = styled.div`
  color: var(--orange-100, #FFA800);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const ContractContentsTextBedgeRed = styled.div`
  display: flex;
  padding: 3px 7px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: rgba(255, 92, 112, 0.15);
`
const ContractContentsTextBedgeTextRed = styled.div`
  color: #FF5C70;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`



const ContractContentsTextLowerBox = styled.div`
  color: var(--black-40, rgba(31, 49, 78, 0.40));
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;  
`


function SearchMapPage() {
  const { state, search } = useLocation();
  const { kakao } = window;
  const [center, setCenter] = useState({lat: 37.5049929789478, lng: 127.032959789566});
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state)
    setResult({
      title: !!state[0]["road_address"]["building_name"] ? state[0]["road_address"]["building_name"] : state[0]["address_name"],
      address: state[0]["address_name"],
      latlng: {lat: state[0]['y'], lng: state[0]['x']},
    })
    setCenter({lat: state[0]['y'], lng: state[0]['x']})
  }, []);

  return (
    <BasicLayout>
      <InnerLayout>
        <Header />
        <Map
          id="map"
          center={center}
          style={{ width: '360px', height: '241px' }}
          level={3}
        >
          <ZoomControl position={kakao.maps.ControlPosition.RIGHT} />
          <MapTypeControl position={kakao.maps.ControlPosition.RIGHT}/>
          <MapMarker
            position={result.latlng}
            title={result.title}
          />
        </Map>
        <MapTitleBox>
          <MapTitle>{result.title}</MapTitle>
          <MapTitleDetail>{result.address}</MapTitleDetail>
        </MapTitleBox>
        <MapGap/>
        <ContractBox>
          <ContractTitleBox>
            <ContractTitleText>계약 정보</ContractTitleText>
            <ContractTitleButton onClick={() => navigate('/contract')}>
              <PlusIcon style={{ width: "24px" }} />
              <ContractTitleButtonText>내 계약서 등록</ContractTitleButtonText>
            </ContractTitleButton>
          </ContractTitleBox>
          <ContractCotentsAllBox>
            {search.split("=")[1] === "new" ?
            <ContractCotentsBox>
              <ContractContentsTextBox>
                <ContractContentsTextUpperBox>
                  <ContractContentsTextTitle>B동 101호</ContractContentsTextTitle>
                  <ContractContentsTextBedge>
                    <ContractContentsTextBedgeText>전세</ContractContentsTextBedgeText>
                  </ContractContentsTextBedge>
                  <ContractContentsTextBedgeRed>
                    <ContractContentsTextBedgeTextRed>New</ContractContentsTextBedgeTextRed>
                  </ContractContentsTextBedgeRed>
                </ContractContentsTextUpperBox>
                <ContractContentsTextLowerBox>
                  계약일자 : 23.07.31
                </ContractContentsTextLowerBox>
                <ContractContentsTextLowerBox>
                  23.08.15 - 25.08.14
                </ContractContentsTextLowerBox>
              </ContractContentsTextBox>
            </ContractCotentsBox>
            : null}
            <ContractCotentsBox>
              <ContractContentsTextBox>
                <ContractContentsTextUpperBox>
                  <ContractContentsTextTitle>B동 101호</ContractContentsTextTitle>
                  <ContractContentsTextBedge>
                    <ContractContentsTextBedgeText>전세</ContractContentsTextBedgeText>
                  </ContractContentsTextBedge>
                </ContractContentsTextUpperBox>
                <ContractContentsTextLowerBox>
                  계약일자 : 21.07.20
                </ContractContentsTextLowerBox>
                <ContractContentsTextLowerBox>
                  21.08.02 - 23.08.01
                </ContractContentsTextLowerBox>
              </ContractContentsTextBox>
            </ContractCotentsBox>
            <ContractCotentsBox>
              <ContractContentsTextBox>
                <ContractContentsTextUpperBox>
                  <ContractContentsTextTitle>A동 101호</ContractContentsTextTitle>
                  <ContractContentsTextBedgeYellow>
                    <ContractContentsTextBedgeTextYellow>월세</ContractContentsTextBedgeTextYellow>
                  </ContractContentsTextBedgeYellow>
                </ContractContentsTextUpperBox>
                <ContractContentsTextLowerBox>
                  계약일자 : 22.07.01
                </ContractContentsTextLowerBox>
                <ContractContentsTextLowerBox>
                  22.07.15 - 24.07.14
                </ContractContentsTextLowerBox>
              </ContractContentsTextBox>
            </ContractCotentsBox>
          </ContractCotentsAllBox>
        </ContractBox>
      </InnerLayout>
    </BasicLayout>
  );
}

export default SearchMapPage;