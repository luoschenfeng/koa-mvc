import * as Koa from 'koa'
import type = require('@/types')


export type methodUnion = 'ACL' | 'BIND' | 'CHECKOUT' | 'CONNECT' | 'COPY' | 'DELETE' |
  'GET' | 'HEAD' | 'LINK' | 'LOCK' | 'M-SEARCH' | 'MERGE' |
  'MKACTIVITY' | 'MKCALENDAR' | 'MKCOL' | 'MOVE' | 'NOTIFY' | 'OPTIONS' |
  'PATCH' | 'POST' | 'PROPFIND' | 'PROPPATCH' | 'PURGE' | 'PUT' |
  'REBIND' | 'REPORT' | 'SEARCH' | 'SOURCE' | 'SUBSCRIBE' | 'TRACE' |
  'UNBIND' | 'UNLINK' | 'UNLOCK' | 'UNSUBSCRIBE'

export type method =  methodUnion | 'ALL' | Array<methodUnion | 'ALL'>


export type children = route[]

export interface route {
  method?: method
  pattern: string
  controller?: controller,
  children?: children,
  meta?: type.likeObject
}
export interface controller {
  (ctx: Koa.Context): any
}

