import axios from 'axios';

import { API } from '@store/constants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fetchData = async () => {
  return await axios.get(API);
}

describe('Movies component', () => {

  it('should fetch data successfully from API', async () => {
    const data = {
        "data" : {
          "movies" : [ {
            "id" : "f6ea091a-5d9d-11ea-bc55-0242ac130003",
            "name" : "Star Wars: The Last Jedi",
            "release_date" : "2017-12-14",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/star-wars-last-jedi.png",
            "rank" : 1
          }, {
            "id" : "fbf8a2e0-5d9d-11ea-bc55-0242ac130003",
            "name" : "Arrival",
            "release_date" : "2016-09-02",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/arrival.png",
            "rank" : 2
          }, {
            "id" : "4c74c2da-5d9e-11ea-bc55-0242ac130003",
            "name" : "Blade Runner 2049",
            "release_date" : "2017-10-05",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/blade-runner.png",
            "rank" : 3
          }, {
            "id" : "6718b36c-5d9e-11ea-bc55-0242ac130003",
            "name" : "The Martian",
            "release_date" : "2015-10-01",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/the-martian.png",
            "rank" : 4
          }, {
            "id" : "94bdf3ae-5d9e-11ea-bc55-0242ac130003",
            "name" : "Snowpiecer",
            "release_date" : "2014-07-29",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/snow-piecer.png",
            "rank" : 5
          }, {
            "id" : "c7ca7128-5d9e-11ea-bc55-0242ac130003",
            "name" : "Her",
            "release_date" : "2013-12-09",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/her.png",
            "rank" : 6
          }, {
            "id" : "e040a6f0-5d9e-11ea-bc55-0242ac130003",
            "name" : "Interstellar",
            "release_date" : "2014-11-06",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/interstellar.png",
            "rank" : 7
          }, {
            "id" : "0240304a-5d9f-11ea-bc55-0242ac130003",
            "name" : "Edge Of Tomorrow",
            "release_date" : "2014-05-28",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/edge-of-tomorrow.png",
            "rank" : 8
          }, {
            "id" : "1ba06ffa-5d9f-11ea-bc55-0242ac130003",
            "name" : "Looper",
            "release_date" : "2012-10-27",
            "post_url" : "https://frontend-test-assets.s3.amazonaws.com/looper.png",
            "rank" : 9
          } 
        ]
      }
    };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData()).resolves.toEqual(data);
  });

  it('should fetch errooneously', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    await expect(fetchData()).rejects.toThrow(errorMessage);
  });

});