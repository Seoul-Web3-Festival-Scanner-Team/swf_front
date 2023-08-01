import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CircleOpWaveLoading from "components/global/loadings/CircleOpWaveLoading";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticBlock from "components/utils/ElasticBlock";
import ElasticText from "components/utils/ElasticText";
import { LayerAlign } from "components/utils/WidgetUtils";
import { COLORS } from "styles/global/globalColors";

function StoreLoading() {
    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={160} />
            <CircleOpWaveLoading />

            <ElasticBlock h={42} />
            <ElasticText color={COLORS.black} size={24} weight={700}>
                계약 내용을
                <br />
                블록체인에 저장하고 있어요
            </ElasticText>
        </AllFullColumn>
    );
}

export default StoreLoading;
