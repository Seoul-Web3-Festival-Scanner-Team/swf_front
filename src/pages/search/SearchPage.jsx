import FrontIconInput from "components/global/inputs/FrontIconInput";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import {ReactComponent as SearchIcon} from "assets/icons/ic-search.svg";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const handleSearchAddress = useCallback(async() => {
    navigate('/search/list')
  }, []);

  return (
    <BasicLayout>
      <InnerLayout>
        <div style={{ marginTop: "172px", padding: "0 20px", display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "26px" }}>
          <div style={{ marginBottom: "26px", fontSize: "22px", fontWeight: "700" }}>계약할 집을 검색해주세요</div>
          <FrontIconInput value={value} setValue={setValue} iconComponent={<SearchIcon style={{ width: "20px" }}/>} placeholder="단지, 지역, 지하철, 학교 검색" onSearch={handleSearchAddress} />
        </div>
      </InnerLayout>
    </BasicLayout>
  );
}

export default SearchPage;