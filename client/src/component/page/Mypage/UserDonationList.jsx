import { Box, TextField, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { mockDataTeam } from "./mockData";
import Sidebar from "./Sidebar";
import './Mypage.css';

const UserDonationList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "게시글 번호", align: "center", headerAlign: "center", width: 150},
    { field: "amount",headerName: "금액 (단위:ETH)",type: "number", align: "center", headerAlign: "center", width: 150},
    { field: "title", headerName: "제목", align: "center", headerAlign: "center", width: 150},
    { field: "category",headerName: "카테고리", align: "center", headerAlign: "center",width: 150 },
    { field: "date",headerName: "기부일",type: "date", align: "center", headerAlign: "center",width: 150 }
  ];

  return (
    <div className="app">
    <Sidebar />   
    <Box sx={{ justifyContent: 'center' }}  >
      <Box
        m="50px 50px 50px 250px"
        height="70vh"
        width={750}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[200],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[200],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >      
      <DataGrid autoPageSize pagination rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
    </div>
  );
};

export default UserDonationList;

