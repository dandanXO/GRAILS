package howk
import grails.rest.*

@Resource(uri='/unit')
class Unit {
    String factory
    int num
    static constraints = {
        factory blank: false
        num black:false
    }
}
