import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import { useAppStore } from "../../store";

const ReferralStats = () => {
  const { user } = useAppStore();
  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Referrals Sent */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" color="textSecondary">
              Referrals Sent
            </Typography>
            <Typography variant="h4" color="primary" fontWeight="bold">
              {user?.totalReferrals}
            </Typography>
          </Box>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "50px", mx: 2 }}
          />

          {/* Referrals Completed */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" color="textSecondary">
              Referrals Completed
            </Typography>
            <Typography variant="h4" color="success.main" fontWeight="bold">
              {user?.completedReferrals}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReferralStats;
