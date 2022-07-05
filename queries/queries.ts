import { gql } from '@apollo/client'

// ユーザ一覧取得
export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`
// ユーザ一覧をキャッシュから取得
export const GET_USERS_LOCAL = gql`
  query GetUsers {
    users(order_by: { created_at: desc }) @client {
      id
      name
      created_at
    }
  }
`
// ユーザ一覧のIDのみを取得
export const GET_USERIDS = gql`
  query GetUserIds {
    users(order_by: { created_at: desc }) {
      id
    }
  }
`
// 個別ページ用の個別のユーザを取得するquery(idを引数に渡して検索)
export const GET_USERBY_ID = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`
// ユーザーを作成する
export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
  }
`
// ユーザーを削除する
export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`
// ユーザーの更新
export const UPDATE_USER = gql`
  mutation UpdateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`
