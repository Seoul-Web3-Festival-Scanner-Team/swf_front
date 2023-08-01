import styled from "@emotion/styled";
import Header from "components/global/Header";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import { useEffect, useState } from "react";
import {
    Map,
    MapMarker,
    MapTypeControl,
    ZoomControl,
} from "react-kakao-maps-sdk";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { ReactComponent as PlusIcon } from "assets/icons/ic-plus.svg";
import { ToastType, useToast } from "components/providers/ToastProvider";
import ContractConnector from "networks/ContractConnector";
import { useModal } from "components/providers/ModalProvider";
import AccordionBox from "components/global/AccordionBox";

const MapTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 20px;
    width: 100%;
    height: 108px;
`;

const MapTitle = styled.div`
    color: var(--black-100, #1f314e);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const MapTitleDetail = styled.div`
    margin-top: 6px;
    color: var(--black-60, rgba(31, 49, 78, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const MapGap = styled.div`
    width: 100%;
    height: 12px;
    flex-shrink: 0;
    opacity: 0.2;
    background: #d5dbe5;
`;

const ContractBox = styled.div`
    padding: 28px 20px 0 20px;
`;

const ContractTitleBox = styled.div`
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContractTitleText = styled.div`
    color: var(--black-100, #1f314e);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ContractTitleButton = styled.button`
    display: flex;
    padding: 8px 13px 8px 10px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    background: var(--blue-15, rgba(73, 142, 246, 0.15));
    cursor: pointer;
`;

const ContractTitleButtonText = styled.div`
    color: var(--blue-100, #498ef6);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ContractCotentsAllBox = styled.div`
    margin-top: 14px;
`;

function SearchMapPage() {
    const { state, search } = useLocation();
    const { showToast } = useToast();
    const { openModal } = useModal();
    const { kakao } = window;
    const [center, setCenter] = useState({
        lat: 37.5049929789478,
        lng: 127.032959789566,
    });
    const [result, setResult] = useState("");
    const navigate = useNavigate();
    const [selected, setSelected] = useState(-1);

    const getContractData = async () => {
        const contract = new ContractConnector();
        console.log("await contract.getDatas()");
        console.log(await contract.getDatas("주소"));
    };

    useEffect(() => {
        // getContractData();
        if (search.split("=")[1] === "new") {
            // openModal({ params: { title: "경고!" } });
            showToast({
                type: ToastType.Basic,
                params: {
                    content: "내 계약이 등록되었어요 :)",
                },
            });
        }
        setResult({
            title: !!state[0]["road_address"]["building_name"]
                ? state[0]["road_address"]["building_name"]
                : state[0]["address_name"],
            address: state[0]["address_name"],
            latlng: { lat: state[0]["y"], lng: state[0]["x"] },
        });
        setCenter({ lat: state[0]["y"], lng: state[0]["x"] });
    }, []);

    return (
        <BasicLayout>
            <InnerLayout>
                <Header />
                <Map
                    id="map"
                    center={center}
                    style={{ width: "360px", height: "241px" }}
                    level={3}>
                    <ZoomControl position={kakao.maps.ControlPosition.RIGHT} />
                    <MapTypeControl
                        position={kakao.maps.ControlPosition.RIGHT}
                    />
                    <MapMarker position={result.latlng} title={result.title} />
                </Map>
                <MapTitleBox>
                    <MapTitle>{result.title}</MapTitle>
                    <MapTitleDetail>{result.address}</MapTitleDetail>
                </MapTitleBox>
                <MapGap />
                <ContractBox>
                    <ContractTitleBox>
                        <ContractTitleText>계약 정보</ContractTitleText>
                        <ContractTitleButton
                            onClick={() => navigate("/contract")}>
                            <PlusIcon style={{ width: "24px" }} />
                            <ContractTitleButtonText>
                                내 계약서 등록
                            </ContractTitleButtonText>
                        </ContractTitleButton>
                    </ContractTitleBox>
                    <ContractCotentsAllBox>
                        {search.split("=")[1] === "new" ? (
                        <AccordionBox
                            selected={selected === 0}
                            setSelected={setSelected}
                            title="101호"
                            termStartDate = "2023.08.05"
                            termEndDate = "2025.08.04"
                            contractDate = "2023.07.15"
                            deposit = "200,000,000"
                            isNew
                        />
                        ) : null}
                        <AccordionBox
                            selected={selected === 0}
                            setSelected={setSelected}
                            title="101호"
                            termStartDate = "2021.08.03"
                            termEndDate = "2023.08.02"
                            contractDate = "2021.06.21"
                            deposit = "200,000,000"
                            nowLiving
                        />
                        <AccordionBox
                            selected={selected === 1}
                            setSelected={setSelected}
                            liveType="월세"
                            title="101호"
                            termStartDate = "2019.07.20"
                            termEndDate = "2021.07.19"
                            contractDate = "2021.06.25"
                            deposit = "100,000,000"
                            monthPay = "800,000"
                        />
                    </ContractCotentsAllBox>
                </ContractBox>
            </InnerLayout>
        </BasicLayout>
    );
}

export default SearchMapPage;
