import styled from 'styled-components'

export const Container = styled.div`
flex: 0 1 700px;

`
export const Screen = styled.div`
position: relative;
background: #3e3e3e;
border-radius: 15px;
&:after {
    content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
  }
`
export const ScreenHeader = styled.div`
display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  &:after {

  }
`
export const ScreenHeaderLeft = styled.div`
margin-right: auto;
`
export const ScreenHeaderButtonClose = styled.div`
display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: #ed1c6f;
`
export const ScreenHeaderButtonMax = styled.div`
display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: #e8e925;
`
export const ScreenHeaderButtonMin = styled.div`
display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: #74c54f;
`
export const ScreenHeaderRight = styled.div`
 display: flex;
`
export const ScreenHeaderEllipsis = styled.div`
width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
`
export const ScreenBody = styled.div`
display: flex;
`
export const ScreenBodyItemLeft = styled.div`
 display: flex;
  flex-direction: column;
`
export const AppTitle = styled.div`
display: flex;
  flex-direction: column;
  position: relative;
  color: #d65f3f;
  font-size: 26px;
  &:after{
    content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #9e655e;
  }
`
export const AppContact = styled.div`
margin-top: auto;
  font-size: 12 px;
  color: #888;
`
export const ScreenBodyItem = styled.div`
flex: 1;
  padding: 50px;
`
export const Appform = styled.div`
margin-bottom: 15px;
`
export const AppFormGroup = styled.div`
margin-bottom: 15px;
`
export const AppFormGroupMessage = styled.div`
 margin-top: 40px;

`
export const AppFormGroupButton = styled.div`
margin-bottom: 0;
  text-align: right;
`
export const AppformControl = styled.div`
width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
  
`
export const Credits = styled.div`

`