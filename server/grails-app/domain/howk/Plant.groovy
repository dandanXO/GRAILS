package howk
import grails.rest.*

@Resource(uri='/plant')
class Plant {
    String factory
    static constraints = {
        factory blank: false
    }
}
