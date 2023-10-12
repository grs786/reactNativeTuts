/* eslint-disable @typescript-eslint/no-unused-vars */
import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../utilities/http-client';
import {} from '../../store/actions/home-action-types';
import {hideLoader, showLoader} from '../../store/actions/app-action-types';
import Toast from '../../commonComponent/toast';

function* home() {}

export default home;
