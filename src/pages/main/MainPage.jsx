import Header from "components/global/Header";
import SimpleBtn from "components/global/btns/SimpleBtn";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import ElasticSizedBox from "components/utils/ElasticSizedBox";

function MainPage() {
    return (
        <BasicLayout>
            <InnerLayout>
                <Header title={"헤더"} />
                <ElasticSizedBox w={320} h={48}>
                    <SimpleBtn>테스트</SimpleBtn>
                </ElasticSizedBox>
            </InnerLayout>
        </BasicLayout>
    );
}

export default MainPage;
