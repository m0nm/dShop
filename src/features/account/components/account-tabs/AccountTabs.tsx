import React from "react";
import { Container } from "@/components/Shared";
import { Icon } from "ts-react-feather-icons";
import { useAccountStore } from "../../store";
import { MyAddress, MyDetails, MyOrders, MySettings, OrderDetail } from ".";
import {
  AccountTabsContainer,
  TabsList,
  TabTrigger,
  TabContent,
} from "./account-tabs.styles";

export const AccountTabs = () => {
  const { tabValue, setTabValue } = useAccountStore();

  return (
    <Container>
      <AccountTabsContainer
        value={tabValue}
        onValueChange={(value) => setTabValue(value as typeof tabValue)}
      >
        <TabsList>
          <TabTrigger value="details">
            <span>
              <Icon name="user" size={18} />
              My details
            </span>
          </TabTrigger>

          <TabTrigger value="orders">
            <span>
              <Icon name="book" size={18} />
              My Orders
            </span>
          </TabTrigger>

          <TabTrigger value="address">
            <span>
              <Icon name="map-pin" size={18} />
              My Address
            </span>
          </TabTrigger>

          <TabTrigger value="settings">
            <span>
              <Icon name="settings" size={18} />
              Account Settings
            </span>
          </TabTrigger>
        </TabsList>

        <TabContent value="details">
          <MyDetails />
        </TabContent>

        <TabContent value="address">
          <MyAddress />
        </TabContent>

        <TabContent value="orders">
          <MyOrders />
        </TabContent>

        <TabContent value="order-detail">
          <OrderDetail />
        </TabContent>

        <TabContent value="settings">
          <MySettings />
        </TabContent>
      </AccountTabsContainer>
    </Container>
  );
};
