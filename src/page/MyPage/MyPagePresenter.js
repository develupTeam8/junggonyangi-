import React from "react";
import styled from "styled-components";
import BaseLayout from "../../components/Layout/BaseLayout";
import Profile from "./Profile";
import MyWriting from "./MyWriting";

const Container = styled.div`
	position: relative;
	margin: 50px 0;
	min-height: calc(100vh - 366px);
`;

const MyPagePresenter = () => (
	<BaseLayout>
		<Container>
			<Profile />
			<MyWriting />
		</Container>
	</BaseLayout>
);

export default MyPagePresenter;
